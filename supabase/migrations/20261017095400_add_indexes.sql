CREATE INDEX idx_waypoints_parent_id
ON "public"."waypoints"
USING btree ("parent_id");
